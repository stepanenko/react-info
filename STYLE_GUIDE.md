

## React code style rules
As application grow, it will become very hard to manage and maintain such code. We should always follow some rules while writing code and this is not limited to React.

**Import Order:**
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

(Separate each import category by one empty line)

**Rules for Components:**
- Destrucutre Props (If there)
- Destructure redux state (If there)
- Initialize State Variables (If there)
- Create Refs (If there)
- Initialize hooks (useDispatch)
- Write all useEffects
- Create const/let specific to Component
- Call functions (If there)

(Separate each section by one empty line)

If we enforce these rules, debugging will be super easy. It will also impact the Readability and onboarding new developers will be piece of cake.
