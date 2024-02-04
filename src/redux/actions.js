import axios from 'axios';
export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVER_ID = "GET_DRIVER";
export const POST_DRIVER = "POST_DRIVER";
export const GET_TEAMS = "GET_TEAMS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const SELECT_TEAM = "SELECT_TEAM";
export const HANDLE_ERROR = "HANDLE_ERROR";
export const RESET_DETAIL = "RESET_DETAIL";

// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "driversapi-back-production.up.railway.app"

export const getDrivers = (name) => {
    return async function (dispatch) {
        try {
            let url = "https://driversapi-back-production.up.railway.app/drivers/";

            if (name) {
                url += `?name=${name}`;
            };

            const apiData = await axios.get(url);
            const drivers = apiData.data;

            dispatch({ type: GET_DRIVERS, payload: drivers });
        } catch (error) {

            dispatch({ type: HANDLE_ERROR, payload: error.message });
        }
    };
};

export const getDriverById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://driversapi-back-production.up.railway.app/drivers/${id}`)

        const driver = apiData.data;
        dispatch({ type: GET_DRIVER_ID, payload: driver })
    };
};

export const postDriver = (form) => {
    return async function (dispatch) {
        const apiData = await axios.post("https://driversapi-back-production.up.railway.app/drivers/", form);

        const driver = apiData.data
        dispatch({ type: POST_DRIVER, payload: driver })
    };
};

export const getTeams = () => {
    return async function (dispatch) {
        const apiData = await axios.get("https://driversapi-back-production.up.railway.app/teams/");

        const teams = apiData.data
        dispatch({ type: GET_TEAMS, payload: teams })
    };
};

export const filterDrivers = (filterValue) => {
    return {
        type: FILTER,
        payload: filterValue,
    };
};

export const orderDrivers = (value) => {
    return {
        type: ORDER,
        payload: value,
    };
};

export const selectTeam = (teamName) => {
    return {
        type: SELECT_TEAM,
        payload: teamName,
    };
};