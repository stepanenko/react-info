const App = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open dialog
      </Button>
      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
};
