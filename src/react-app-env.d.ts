/// <reference types="react-scripts" />

interface CharacterInfo {
    id: number;
    code: string;
    style: string;
    category: number;
    free?: boolean;
    sky: string;
    jonly: boolean;
    first?: boolean;
    change: number[];
}

interface InfoProps {
    array: CharacterInfo[]
}