import React, { useEffect, useState } from "react";
import database from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";
import { getApp } from "firebase/app";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [showPurchase, setShowPurchase] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    useEffect(() => {
        // Fetch project list from Realtime DB
        const projectRef = ref(database, "projects");
        const unsubscribe = onValue(projectRef, (snapshot) => {
            const data = snapshot.val();
            if (Array.isArray(data)) {
                setProjects(data);
            } else {
                setProjects([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const remoteConfig = getRemoteConfig(getApp());
        remoteConfig.settings = {
            minimumFetchIntervalMillis: 300,
        };

        fetchAndActivate(remoteConfig)
            .then(() => {
                const purchaseVisibility = getValue(remoteConfig, "show_purchase_button").asBoolean();
                const priceVisibility = getValue(remoteConfig, "show_project_price").asBoolean();
                setShowPurchase(purchaseVisibility);
                setShowPrice(priceVisibility);
            })
            .catch((error) => {
                console.error("Remote Config fetch failed:", error);
            });
    }, []);

    return (
        <div>
            <h2>Project List</h2>
            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "15px" }}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {showPrice && <p><strong>Price:</strong> ${project.price}</p>}
                    <p><strong>Technologies:</strong> {project.technology.join(", ")}</p>
                    <p><strong>Requirements:</strong> {project.requirements.join(", ")}</p>
                    <p><strong>Creator:</strong> {project.creator}</p>
                    <p><strong>Rating:</strong> {project.rating} ⭐</p>
                    {showPurchase && <button>Purchase Template</button>}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
