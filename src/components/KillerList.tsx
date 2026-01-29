// src/components/KillerList.tsx
import { useEffect, useState } from 'react';
import { BackendService } from '../services/backend'; // Import your service
import type { KillerModel } from '../models/KillerModel';

export const KillerList = () => {
    const [killers, setKillers] = useState<KillerModel[]>([]);

    useEffect(() => {
        // The component just calls "getAllKillers()"
        // It doesn't care about URLs, Fetch, or JSON parsing.
        BackendService.getAllKillers()
            .then(data => setKillers(data))
            .catch(error => console.error("Failed to load killers", error));
    }, []);

    return (
        <div>
            {killers.map(k => <div key={k.id}>{k.name}</div>)}
        </div>
    );
};
