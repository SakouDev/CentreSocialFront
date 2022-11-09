import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import * as React from 'react'

export default function CheckDispo() {

    const [state, setState] = React.useState({
        bafa: true,
        bafd: false,
        nodiplo: false,
        stageprat: false,
        bpjeps: false,
      });

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const { bafa, bafd, nodiplo, stageprat, bpjeps } = state;
  return (
    <>
        <FormLabel component="legend">Diplôme</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={bafa} onChange={handleChange} name="bafa"/>} label="BAFA" />
            <FormControlLabel control={<Checkbox checked={bafd} onChange={handleChange} name="bafd"/>} label="BAFD" />
            <FormControlLabel control={<Checkbox checked={nodiplo} onChange={handleChange} name="nodiplo"/>} label="Non Diplômé" />
            <FormControlLabel control={<Checkbox checked={stageprat} onChange={handleChange} name="stageprat"/>} label="Stage Pratique" />
            <FormControlLabel control={<Checkbox checked={bpjeps} onChange={handleChange} name="bpjeps"/>} label="BPJEPS" />
        </FormGroup>
    </>
  )
}
