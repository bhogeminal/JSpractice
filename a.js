const a=[1,2,3,45,5.2,3,2,1]


let c=new Set(a)
console.log(c);





// a.length=3;
// console.log(a);
// const b=  a.reduce((x,y)=>
// x+y,

// )
// console.log(b)

// let x=20,  y=1
//  [x,y] = [y,x]
//  console.log(x,y)




import axios from 'axios';
import React, { useEffect } from 'react';
import {View,Text} from 'react-native';


const App =()=>{

fetchdata=()=>{
  const data=axios.get()
}
useEffect(()=>{
fetchdata()
},[])

}


///////

import React, { useEffect, useState } from "react";
import { View, Text, Image, style, TextInput } from "react-native";
import axios from "axios";
const App = () => {
  const [showdata, setshowdata] = useState([]);
  const [searchquery, setsearchquery] = useState("");
  const [master, setMaster] = useState([]);
  const handlesearch = (query) => {
    if (query) {
      let temp = showdata?.data?.products.filter((item) => {
        console.log(
          "query",
          item.title.toUpperCase().indexOf(query.toUpperCase()) > -1
        );
        return item.title.toUpperCase();
        const textdata = query.toUpperCase();
        return temp.indexOf(textdata) > -1;
      });

      console.log("tempquery", temp);
      setMaster(temp);
      setsearchquery(query);
      console.log("masterDataSource", master);
      console.log("showdata", showdata);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setMaster(showdata);
      setsearchquery(query);
    }
  };

  useEffect(() => {
    usefetchdata();
  }, []);
  const usefetchdata = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log("response", response.data.products);
      setshowdata(response.data.products);
      setMaster(response.data.products);
      console.log("master", master);
      console.log("showdata", showdata);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 10
      }}
    >
      <View>
        <TextInput
          placeholder="Enter Search"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            clearButtonMode: "always"
          }}
          onChangeText={(txt) => handlesearch(txt)}
          value={searchquery}
        />
      </View>
      {/* <Text>{showdata.data.products[0].title}</Text> */}

      {master?.map((a, i) => {
        console.log("aaaa", a);
        return (
          <View style={{ width: "90%" }} key={i}>
            <View style={{ width: "90%", flexDirection: "row" }}>
              <Image
                source={{ uri: a.thumbnail }}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
              <View style={{ padding: 10 }}>
                <Text>{a.title}</Text>
                <Text>{a.description}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default App;
