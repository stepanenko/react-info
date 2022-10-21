
## React code style rules
As application grows, it will become very hard to manage and maintain your code so we should always follow some rules while writing code.

**Import Order:**
- React imports
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

(Separate each import category by one empty line)

**Rules for Components:**
- Destrucutre Props (if present)
- Destructure State (Redux / React Query, if present)
- Initialize State Variables (if needed)
- Create Refs (if needed)
- Initialize Hooks (useDispatch, if using Redux)
- Write all useEffects (if needed)
- Create const/let specific to Component (if needed)
- Call functions (if needed)

(Optional: Separate each section by one empty line)

If we apply these rules, debugging will be easier. It will also impact readability and improve onboarding new developers.
