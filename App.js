import { useState } from "react";
import {View,Image,Text,Pressable,StatusBar,ScrollView,Button,} from "react-native";

const KenyaImg = require("./assets/kenya.jpg");
const UgandaImg = require("./assets/uganda.jpg");
const TanzaniaImg = require("./assets/tanzania.jpg");
const RwandaImg = require("./assets/rwanda.jpg");
const BurundiImg = require("./assets/burundi.jpg");
const SouthSudanImg = require("./assets/south_sudan.jpg");

const countries = [
  {
    country: "Kenya",
    capital: "Nairobi",
    image: KenyaImg,
    history:
      "Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. Its capital, Nairobi, is a safari hub. Kenya is known for its wildlife safaris and is home to many national parks and reserves.It was colonized by the United Kingdom and gained independence in 1963.The first president of Kenya was Jomo Kenyatta, who played a key role in the country's struggle for independence.It has had 5 presidents since independence, with the current president being His Excellency William Ruto.",
  },
  {
    country: "Uganda",
    capital: "Kampala",
    image: UgandaImg,
    history:
      "Uganda is a landlocked country in East Africa. It is known for its diverse wildlife and is home to several national parks and reserves.It was colonized by the United Kingdom and gained independence in 1962.It has had 8 presidents since independence, with the current president being His Excellency Yoweri Kaguta Museveni.",
  },
  {
    country: "Tanzania",
    capital: "Dodoma",
    image: TanzaniaImg,
    history:
      "Tanzania is a country in East Africa with a coastline on the Indian Ocean. It is known for its natural beauty and is home to several national parks and reserves.It was colonized by Germany and later by the United Kingdom, gaining independence in 1961. Tanzania is known for its wildlife safaris and is home to Mount Kilimanjaro, the highest peak in Africa.It has had 6 presidents since independence, with the current president being Her Excellency Samia Suluhu Hassan.",
  },
  {
    country: "Rwanda",
    capital: "Kigali",
    image: RwandaImg,
    history:
      "Rwanda is a small country in East Africa known for its efforts in post-conflict reconstruction and conservation.It was colonized by the United Kingdom and gained independence in 1962.",
  },
  {
    country: "Burundi",
    capital: "Bujumbura",
    image: BurundiImg,
    history:
      "Burundi is a small landlocked country in East Africa. It is known for its cultural diversity and natural resources.It was colonized by the United Kingdom and gained independence in 1962.",
  },
  {
    country: "South Sudan",
    capital: "Juba",
    image: SouthSudanImg,
    history:
      "South Sudan is a young nation in East Africa, rich in natural resources and cultural heritage.It was colonized by the United Kingdom and gained independence in 2011.",
  },
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (selectedCountry) {
    return (
      <View style={{ flex: 1, backgroundColor: "lightblue", padding: 30 }}>
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
        <Image source={selectedCountry.image} style={{ width: 320, height: 300,marginTop: 20, marginBottom: 20 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          {selectedCountry.country}
        </Text>
        <Text style={{ fontSize: 20,marginBottom: 10 ,marginTop: 10}}>Capital: {selectedCountry.capital}</Text>
        <Text style={{ fontSize: 16,marginBottom: 10  }}>{selectedCountry.history}</Text>
        <Button title="Back" color="midnightblue" onPress={() => setSelectedCountry(null)} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <Text style={{ fontSize: 24, fontWeight: "bold",marginBottom: 20,marginTop:20, textAlign: "center" }}>
        East African Countries
      </Text>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {countries.map((country) => (
            <Pressable
              key={country.country}
              onPress={() => setSelectedCountry(country)}
              style={{ width: "48%", marginBottom: 20, alignItems: "center",  }}
            >
              <Image source={country.image} style={{ width: 110, height: 100, borderRadius: 5,margin:10 }} />
              <Text style={{ marginTop: 8, fontSize: 16 }}>{country.country}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}