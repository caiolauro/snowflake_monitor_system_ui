import validator from 'validator'
import { useState, useEffect } from 'react';
import { Themes } from '@flixbus/honeycomb-react';
import { countries } from './constants';

export interface DiscountMap {
    [key: string]: string
}


export const flagAddOn = (code: string, countryCode: string, country: string) => {
    return (
      <div className="flag-add-on" style={{display: "flex", height: "100%", alignItems: "center", justifyContent: "center"} }>
        <img
          alt={`${country}`}
          src={`https://honeycomb.flixbus.com/dist/6.0.0/img/flags/png/${countryCode}-48.png`}
          style={{maxWidth: "100%", borderRadius: "100%", border: "1px solid #e1e1e1"}}
        />
      </div>
    );
  }


export function getTheme(language: string, brand: string) {
    if (language === "tr"){
        return {
            brand: "flixbus",
            theme: "kamil" as Themes,
            backgroundImage: "/images/bus_background_kamil.jpg",
            brandLogo: {
                alt: "Kamil Koç",
                src: "https://honeycomb.flixbus.com/dist/9.0.0/img/logos/svg/kamil-white.svg",
                width: "78",
                height: "36" 
              }
        }
    }
    else if (brand === "greyhound" && (language === "en" || language === "en_us" || language === "es_mx")) {
        return {
            brand: "greyhound",
            theme: "neptune" as Themes,
            backgroundImage: "/images/bus_background_greyhound.jpg",
            brandLogo: {
                alt: "Greyhound",
                src: "https://cdn-cf.cms.flixbus.com/drupal-assets/logos/greyhound.png",
                width: "146",
                height: "36"
              } 
        }
    }
    else if (brand === "flixtrain" && (language === "de" || language === "sv" || language === "en")) {
        return {
            brand: "flixtrain",
            theme: "default" as Themes,
            backgroundImage: "/images/bus_background_flixtrain.jpg",
            brandLogo: {
                alt: "Flixtrain",
                src: "https://cdn-cf.cms.flixbus.com/drupal-assets/logos/flixtrain.png",
                width: "157.22",
                height: "24"
              } 
        }
    }
    else{
        return {
            brand: "flixbus",
            theme: "default" as Themes,
            backgroundImage: "/images/bus_background.jpg",
            brandLogo: {
                alt: "FlixBus",
                src: "https://honeycomb.flixbus.com/dist/7.0.0/img/logos/svg/flixbus-white.svg",
                width: "126",
                height: "24"
              } 
        }
    }
}


export function getDefaultCountry(language: string, brand: string){

    if (countries.includes(language.toUpperCase())){
        return language.toUpperCase()
    }

    else if (language.match("^[a-z]{2}_[a-z]{2}$") && countries.includes(language.split("_")[1].toUpperCase())){
        return language.split("_")[1].toUpperCase()
    }
    
    else if (brand === "greyhound"){
        return "US"
    }

    else {
        return "DE"
    }
}


export function get(object: DiscountMap, key: string, default_value: string) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

export function checkEmail(email: string) {
    if (validator.isEmail(email)) {
        return true
    }
    else {
        return false
    }
}

export function checkPhone(phone: string) {

    let hrPhoneRegEx = new RegExp(/^(\+?385|0)9(1|2|5|7|8|9)\d{7}$/)

    if (validator.isMobilePhone(phone) || hrPhoneRegEx.test(phone) ) {
        return true
    }
    else {
        return false
    }
}

export function useProgressiveImage(src: string, width: number): string {
    const [sourceLoaded, setSourceLoaded] = useState('')

    useEffect(() => {
        if (width > 480) {
            const img = new Image()
            img.src = src
            img.onload = () => setSourceLoaded(src)
        }
    }, [src, width])

    return sourceLoaded
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function getFooterImage(language: string, brand: string, isMobile: boolean): string {
    let basePath: string;

    if (language === "pt_br") {
        basePath = "/images/landscapes/landscape-brazil-flixbus";
    } else if (language === "tr") {
        basePath = "/images/landscapes/landscape-turkye-flixbus-kamil";
    } else if (brand === "greyhound" && (language === "en" || language === "en_us" || language === "es_mx")) {
        basePath = "/images/landscapes/landscape-usa-flixbus-greyhound";
    } else {
        basePath = "/images/landscapes/landscape-eu-flixbus-flixtrain";
    }

    return isMobile ? `${basePath}-s.svg` : `${basePath}.svg`;
}
