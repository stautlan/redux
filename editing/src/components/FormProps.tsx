interface FormProps {
    items: Item[];
    updateItem: (item: Item) => void;
    deleteItem: (id: string) => void;
    addItem: (item: Item) => void;
}