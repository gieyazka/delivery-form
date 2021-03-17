/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox(props) {
  const [destPlace, setDestPlace] = React.useState();
  const getData = async () => {
    return await fetch(`https://delivery-backend-1.powermap.live/orides`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (res) => {
        return res;
      });
  };
  React.useMemo(async () => {
    await getData().then(async (res) => {
      setDestPlace(res);
    });
  }, []);
  return (
    <Autocomplete
      id="combo-box-demo"
      options={destPlace}
      getOptionLabel={(option) => option.name}
      fullWidth={true}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={props.inputRef}
          name={props.name}
          label={props.label}
        />
      )}
    />
  );
}
