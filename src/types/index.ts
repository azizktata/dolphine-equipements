export interface Composant {
    title: string;
    img: string;
    elements?: Composant[];
}

export interface Data {
    title: string;
    elements: Composant[];
}