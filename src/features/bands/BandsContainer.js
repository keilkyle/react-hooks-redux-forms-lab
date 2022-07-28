import {React} from "react";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice"
import { useDispatch, useSelector } from "react-redux"

function BandsContainer() {

  const dispatch = useDispatch()
  const bands = useSelector((state) => state.bands.entities)

  function onBandSubmit(name) {
    dispatch(bandAdded(name))
  }

  return <div>
    <BandInput onBandSubmit={onBandSubmit}/>
    <ul>
    {bands.map((band) => <li key={band}>{band}</li>)}
    </ul>
    </div>;
}

export default BandsContainer;
