import http from "../../services/http";
// import messages from "../../services/messages";

let countries = [];

export const getCountries = async () => {
  if (!countries.length) {
    const res = await http.get("/countries");
    countries = res.data.data.map((country) => ({
      _id: country._id,
      name: country.translations.fa,
    }));
  }
  return countries;
};
