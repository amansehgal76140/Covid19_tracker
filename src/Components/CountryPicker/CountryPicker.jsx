import React,{useEffect,useState} from "react";
import { NativeSelect , FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../Api";
function CountryPicker({handleCountryChange})
{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const ApiCountries=async()=>{
         setFetchedCountries(await fetchCountries());
        }
        ApiCountries();
    },[setFetchedCountries]);
    return(
     <FormControl className={styles.formControl}>
     <NativeSelect onChange={(event)=>{handleCountryChange(event.target.value);}}>
       <option value="">Global</option>
       {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
     </NativeSelect>
     </FormControl>
     );
}
export default CountryPicker;