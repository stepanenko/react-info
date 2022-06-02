
## React code style rules
As application grows, it will become very hard to manage and maintain your code so we should always follow some rules while writing code.

**Import Order:**
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

(Separate each import category by one empty line)

**Rules for Components:**
- Destrucutre Props (if present)
- Destructure redux state (if present)
- Initialize State Variables (if present)
- Create Refs (if present)
- Initialize hooks (useDispatch)
- Write all useEffects
- Create const/let specific to Component
- Call functions (if present)

(Separate each section by one empty line)

If we enforce these rules, debugging will be super easy. It will also impact the Readability and improve onboarding new developers.
