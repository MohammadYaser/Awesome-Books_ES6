const addNewFun = (addSection, listSection, contactSection) => {
  contactSection.style.display = 'none';
  listSection.style.display = 'none';
  addSection.style.display = 'block';
};

const listFun = (addSection, listSection, contactSection) => {
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
  listSection.style.display = 'block';
};
const contactFun = (addSection, listSection, contactSection) => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
};

export { addNewFun, listFun, contactFun };