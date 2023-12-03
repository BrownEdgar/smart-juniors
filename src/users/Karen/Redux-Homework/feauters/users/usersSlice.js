import {createSlice}from "@reduxjs/toolkit";



const initialStateValue = {
  data: [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "phone": "493-170-9623 x156",
      "website": "kale.biz"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "phone": "(254)954-1289",
      "website": "demarco.info"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "phone": "210.067.6132",
      "website": "elvis.io"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "phone": "024-648-3804",
      "website": "ambrose.net"
    }
  ],
  filter: 'allwebsites'
}

export const getAllUsersData = (state) => {
  if (state.users.filter === 'allwebsites') return state.users.data;
  return state.users.data.filter(user => user.website === state.users.filter)
}
export const getUsersNameSelector = (state) => {
  const usersWebsite = state.users.data.map(user => user.website);
  return [...new Set(usersWebsite)]
}
const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateValue,
  reducers: {
    addUser(state, {
      payload
    }) {
      state.data.push({
        id: Math.round(Math.random() * 856) * 123,
        name: `${payload.name} ${payload.lastname}`,
        username: payload.lastname.concat(Math.random().toString(36).slice(4, 12)),
        email: payload.name.concat(payload.lastname.concat("@gmail.com")).toLowerCase(),
        phone: "+374" + Math.random().toString().slice(2, 10),
        website: payload.lastname.concat('.com').toLowerCase(),
      })

    },
    userDelet(state, {payload}) {
      state.data.splice(payload, 1)
    },
    updateFilter(state, action) {
      state.filter = action.payload
    }
  },
})

export const {
  addUser,
  userDelet,
  updateFilter
} = usersSlice.actions
export default usersSlice.reducer