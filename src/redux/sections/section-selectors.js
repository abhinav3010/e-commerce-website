import { createSelector } from 'reselect';

export const selectSections = (state) => state.sections;

export const selectSectionsData = createSelector(
  [selectSections],
  (sections) => sections.sectionsData
);
