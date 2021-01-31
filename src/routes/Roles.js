const agency = ["agency"];
const admin = ["agency_admin", "agency"];
const advisor = ["agency_admin", "agency", "advisor"];
const recep = ["agency_admin", "agency", "advisor", "receptionist"];
const hiring = ["agency_admin", "agency", "hiring"];
const account = ["agency_admin", "agency", "accountant"];
const enjaz_adv = ["agency_admin", "agency", "enjaz_advisor"];
const entry = ["agency_admin", "agency", "enjaz_advisor", "enjaz_entry"];
const payment = ["agency_admin", "agency", "enjaz_advisor", "enjaz_payment"];
const enjaz = [
  "agency_admin",
  "agency",
  "enjaz_advisor",
  "enjaz_payment",
  "enjaz_entry",
];

export default {
  agency,
  admin,
  advisor,
  recep,
  hiring,
  account,
  enjaz_adv,
  entry,
  enjaz,
  payment,
};
