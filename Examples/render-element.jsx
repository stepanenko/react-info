// We declare our Footer before the dialog. While the dialog is still closed and won't be open for a while (or maybe never).
// Does this mean that the footer will always be rendered, even if the dialog is not on the screen?

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // when is this one going to be rendered?
  const footer = <Footer />;

  return isDialogOpen ? <ModalDialog footer={footer} /> : null;
};

// This Footer will actually be rendered only when it ends up in the return object of one of the components, not sooner.
// In our case, it will be the ModalDialog component. It doesn't matter that the <Footer /> element was created in the App.
// It's the ModalDialog that will take it and actually return it:

const ModalDialog = ({ children, footer }) => {
  return (
    <div className="dialog">
    <div className="content">{children}</div>
    {/* Whatever is coming from footer prop is going to be
    rendered only when this entire component renders, not sooner */}
    <div className="footer">{footer}</div> </div>
  );
};
