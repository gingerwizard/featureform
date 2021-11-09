export const resourceTypes = Object.freeze({
  FEATURE: "Feature",
  FEATURE_SET: "Feature Set",
  LABEL: "Label",
  ENTITY: "Entity",
  MODEL: "Model",
  SPACE: "Space",
});

export const resourceIcons = Object.freeze({
  Space: "workspaces",
  Feature: "description",
  Entity: "fingerprint",
  Label: "label",
  "Feature Set": "account_tree",
  Model: "model_training",
});

export const resourcePaths = Object.freeze({
  Space: "/spaces",
  Feature: "/features",
  Entity: "/entities",
  Label: "/labels",
  "Feature Set": "/feature-sets",
  Model: "/models",
});
export const testData = [
  {
    name: "User sample preferences",
    "default-version": "first-version",
    "all-versions": ["first-version", "normalized version"],
    versions: {
      "first-version": {
        "version-name": "first-version",
        dimensions: 3,
        created: "2020-08-09-0290499",
        owner: "Simba Khadder",
        visibility: "private",
        revision: "2020-08-10-39402409",
        tags: ["model2vec", "compressed"],
        description: "Vector generated based on user preferences",
      },
      "normalized version": {
        "version-name": "normalized version",
        dimensions: 3,
        created: "2020-08-09-0290499",
        owner: "Simba Khadder",
        visibility: "private",
        revision: "2020-08-10-39402409",
        tags: ["model2vec", "compressed"],
        description: "Vector generated based on user preferences, normalized",
      },
    },
  },
];

const API_URL = "http://localhost:8080";

export default class ResourcesAPI {
  local = false;
  fetchResources(type) {
    var fetchAddress;
    if (local) {
      fetchAddress = `/data/lists/wine-data.json`;
    } else {
      fetchAddress = `${API_URL}${resourcePaths[type]}`;
    }
    return fetch(fetchAddress, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().then((json_data) => ({ data: json_data })))
      .catch((error) => {
        console.error(error);
      });
  }

  fetchEntity(type, title) {
    var fetchAddress;
    if (local) {
      fetchAddress = "/data/" + type + "/" + title + ".json";
    } else {
      fetchAddress = `${API_URL}/${type}/${title}`;
    }

    return fetch(fetchAddress, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().then((json_data) => ({ data: json_data })))
      .catch((error) => {
        console.error(error);
      });
  }

  fetchSearch(query) {
    const fetchAddress = "/data/lists/wine-data.json";

    return fetch(fetchAddress, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().then((json_data) => ({ data: json_data })))
      .catch((error) => {
        console.error(error);
      });
  }
}