import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { sizeStore } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const dispatch = useDispatch();
  const selectList = props;
  console.log(selectList);
  const classes = useStyles();
  const [size, setSize] = React.useState("");
  useEffect(() => {
    dispatch(sizeStore(size));
  }, [size]);

  const HandleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          onChange={HandleChange}
        >
          <MenuItem value={15}>15cm</MenuItem>
          <MenuItem value={20}>20cm</MenuItem>
          <MenuItem value={25}>25cm</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
