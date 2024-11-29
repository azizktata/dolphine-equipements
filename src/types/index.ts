export interface Composant {
    title: string;
    image: string;
    children?: Composant[];
}

export interface Data {
    title: string;
    children: Composant[];
}