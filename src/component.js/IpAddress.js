import React from 'react';
import { FaMapMarkerAlt, FaWifi } from "react-icons/fa"
import { useGlobalContext } from '../Context';

const IpAddress = () => {

  const {showIp, setShowIp, ipAddress} = useGlobalContext()


  return (
    <header>
      <div className='header1'>
        <p>Your public IP address</p>
        {
          showIp && <small className='alert'>Exposed</small>
        }
      </div>
      <div className='header2'>
        {
          showIp && <h1>{ipAddress.ip}</h1>
        }
        <button onClick={()=> {setShowIp(!showIp)}}>{
          showIp ? "Hide" : "Show"
        } IP address</button>
      </div>
      <div className='header3'>
        <div className='left'>
          <h4>Connection type</h4>
          <div className='effect'>
            <FaWifi className='icon'/>
            {
              ipAddress.org ? (
                <p>{ipAddress.org.slice(0, 7)}</p>
              ) : null
            }
          </div>
        </div>

        <div className='right'>
          <h4>Location</h4>
          <div className='effect'>
            <FaMapMarkerAlt className='icon'/>
            <p>{ipAddress.city}, {ipAddress.country_code}</p>
          </div>
        </div>
      </div>
      <div className='header4'>
        <h3>Details About Location</h3>
        <div className='sub-header'>
          <div className='subs'>
            <h4>Country</h4>
            <p>{ipAddress.country_name}</p>
          </div>
          <div className='subs'>
            <h4>Currency</h4>
            <p>{ipAddress.currency_name}</p>
          </div>
          <div className='subs'>
            <h4>Country Area</h4>
            <p>{ipAddress.country_area} km<sup>2</sup></p>
          </div>
          <div className='subs'>
            <h4>Population</h4>
            {
              ipAddress.country_population ? (
                <p>{ipAddress.country_population.toLocaleString()}</p>
              ) : null
            }

          </div>
          <div className='subs'>
            <h4>Capital</h4>
            <p>{ipAddress.country_capital}</p>
          </div>
          <div className='subs'>
            <h4>Calling Code</h4>
            <p>{ipAddress.country_calling_code}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IpAddress;
