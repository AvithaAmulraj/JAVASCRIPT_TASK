function mostSpokenLanguages(countries, numLanguages) {
    let allLanguages = [];
    countries.forEach(country => {
        allLanguages = allLanguages.concat(country.languages);
    });

    let languageCount = {};
    allLanguages.forEach(language => {
        if (language in languageCount) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
    });

    
    let sortedLanguages = Object.keys(languageCount).map(language => {
        return { language: language, count: languageCount[language] };
    }).sort((a, b) => b.count - a.count);

    return sortedLanguages.slice(0, numLanguages);
}

function mostPopulatedCountries(countries, numCountries) {
    
    let sortedCountries = countries.sort((a, b) => b.population - a.population);

    return sortedCountries.slice(0, numCountries).map(country => {
        return { country: country.name, population: country.population };
    });
}

const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://restcountries.eu/data/ago.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://restcountries.eu/data/aia.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antarctica',
      capital: '',
      languages: ['English', 'Russian'],
      population: 1000,
      flag: 'https://restcountries.eu/data/ata.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://restcountries.eu/data/atg.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://restcountries.eu/data/arg.svg',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://restcountries.eu/data/arm.svg',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://restcountries.eu/data/abw.svg',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://restcountries.eu/data/aus.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://restcountries.eu/data/aut.svg',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://restcountries.eu/data/aze.svg',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://restcountries.eu/data/bhs.svg',
      currency: 'Bahamian dollar'
    },
    {
      name: 'Bahrain',
      capital: 'Manama',
      languages: ['Arabic'],
      population: 1404900,
      flag: 'https://restcountries.eu/data/bhr.svg',
      currency: 'Bahraini dinar'
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      languages: ['Bengali'],
      population: 161006790,
      flag: 'https://restcountries.eu/data/bgd.svg',
      currency: 'Bangladeshi taka'
    },
    {
      name: 'Barbados',
      capital: 'Bridgetown',
      languages: ['English'],
      population: 285000,
      flag: 'https://restcountries.eu/data/brb.svg',
      currency: 'Barbadian dollar'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      languages: ['Belarusian', 'Russian'],
      population: 9498700,
      flag: 'https://restcountries.eu/data/blr.svg',
      currency: 'New Belarusian ruble'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      languages: ['Dutch', 'French', 'German'],
      population: 11319511,
      flag: 'https://restcountries.eu/data/bel.svg',
      currency: 'Euro'
    },
    {
      name: 'Belize',
      capital: 'Belmopan',
      languages: ['English', 'Spanish'],
      population: 370300,
      flag: 'https://restcountries.eu/data/blz.svg',
      currency: 'Belize dollar'
    },
    {
      name: 'Benin',
      capital: 'Porto-Novo',
      languages: ['French'],
      population: 10653654,
      flag: 'https://restcountries.eu/data/ben.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Bermuda',
      capital: 'Hamilton',
      languages: ['English'],
      population: 61954,
      flag: 'https://restcountries.eu/data/bmu.svg',
      currency: 'Bermudian dollar'
    },
    {
      name: 'Bhutan',
      capital: 'Thimphu',
      languages: ['Dzongkha'],
      population: 775620,
      flag: 'https://restcountries.eu/data/btn.svg',
      currency: 'Bhutanese ngultrum'
    },
    {
      name: 'Bolivia (Plurinational State of)',
      capital: 'Sucre',
      languages: ['Spanish', 'Aymara', 'Quechua'],
      population: 10985059,
      flag: 'https://restcountries.eu/data/bol.svg',
      currency: 'Bolivian boliviano'
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      capital: 'Kralendijk',
      languages: ['Dutch'],
      population: 17408,
      flag: 'https://restcountries.eu/data/bes.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      languages: ['Bosnian', 'Croatian', 'Serbian'],
      population: 3531159,
      flag: 'https://restcountries.eu/data/bih.svg',
      currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
      name: 'Botswana',
      capital: 'Gaborone',
      languages: ['English', 'Tswana'],
      population: 2141206,
      flag: 'https://restcountries.eu/data/bwa.svg',
      currency: 'Botswana pula'
    },
    {
      name: 'Bouvet Island',
      capital: '',
      languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
      population: 0,
      flag: 'https://restcountries.eu/data/bvt.svg',
      currency: 'Norwegian krone'
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      languages: ['Portuguese'],
      population: 206135893,
      flag: 'https://restcountries.eu/data/bra.svg',
      currency: 'Brazilian real'
    },
    {
      name: 'British Indian Ocean Territory',
      capital: 'Diego Garcia',
      languages: ['English'],
      population: 3000,
      flag: 'https://restcountries.eu/data/iot.svg',
      currency: 'United States dollar'
    },
    {
      name: 'United States Minor Outlying Islands',
      capital: '',
      languages: ['English'],
      population: 300,
      flag: 'https://restcountries.eu/data/umi.svg',
      currency: 'United States Dollar'
    },
    {
      name: 'Virgin Islands (British)',
      capital: 'Road Town',
      languages: ['English'],
      population: 28514,
      flag: 'https://restcountries.eu/data/vgb.svg',
      currency: '[D]'
    },
    {
      name: 'Virgin Islands (U.S.)',
      capital: 'Charlotte Amalie',
      languages: ['English'],
      population: 114743,
      flag: 'https://restcountries.eu/data/vir.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Brunei Darussalam',
      capital: 'Bandar Seri Begawan',
      languages: ['Malay'],
      population: 411900,
      flag: 'https://restcountries.eu/data/brn.svg',
      currency: 'Brunei dollar'
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      languages: ['Bulgarian'],
      population: 7153784,
      flag: 'https://restcountries.eu/data/bgr.svg',
      currency: 'Bulgarian lev'
    },
    {
      name: 'Burkina Faso',
      capital: 'Ouagadougou',
      languages: ['French', 'Fula'],
      population: 19034397,
      flag: 'https://restcountries.eu/data/bfa.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Burundi',
      capital: 'Bujumbura',
      languages: ['French', 'Kirundi'],
      population: 10114505,
      flag: 'https://restcountries.eu/data/bdi.svg',
      currency: 'Burundian franc'
    },
    {
      name: 'Cambodia',
      capital: 'Phnom Penh',
      languages: ['Khmer'],
      population: 15626444,
      flag: 'https://restcountries.eu/data/khm.svg',
      currency: 'Cambodian riel'
    },
    {
      name: 'Cameroon',
      capital: 'Yaoundé',
      languages: ['English', 'French'],
      population: 22709892,
      flag: 'https://restcountries.eu/data/cmr.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
      languages: ['English', 'French'],
      population: 36155487,
      flag: 'https://restcountries.eu/data/can.svg',
      currency: 'Canadian dollar'
    },
    {
      name: 'Cabo Verde',
      capital: 'Praia',
      languages: ['Portuguese'],
      population: 531239,
      flag: 'https://restcountries.eu/data/cpv.svg',
      currency: 'Cape Verdean escudo'
    },
    {
      name: 'Cayman Islands',
      capital: 'George Town',
      languages: ['English'],
      population: 58238,
      flag: 'https://restcountries.eu/data/cym.svg',
      currency: 'Cayman Islands dollar'
    },
    {
      name: 'Central African Republic',
      capital: 'Bangui',
      languages: ['French', 'Sango'],
      population: 4998000,
      flag: 'https://restcountries.eu/data/caf.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chad',
      capital: "N'Djamena",
      languages: ['French', 'Arabic'],
      population: 14497000,
      flag: 'https://restcountries.eu/data/tcd.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chile',
      capital: 'Santiago',
      languages: ['Spanish'],
      population: 18191900,
      flag: 'https://restcountries.eu/data/chl.svg',
      currency: 'Chilean peso'
    },
    {
      name: 'China',
      capital: 'Beijing',
      languages: ['Chinese'],
      population: 1377422166,
      flag: 'https://restcountries.eu/data/chn.svg',
      currency: 'Chinese yuan'
    },
    {
      name: 'Christmas Island',
      capital: 'Flying Fish Cove',
      languages: ['English'],
      population: 2072,
      flag: 'https://restcountries.eu/data/cxr.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Cocos (Keeling) Islands',
      capital: 'West Island',
      languages: ['English'],
      population: 550,
      flag: 'https://restcountries.eu/data/cck.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Colombia',
      capital: 'Bogotá',
      languages: ['Spanish'],
      population: 48759958,
      flag: 'https://restcountries.eu/data/col.svg',
      currency: 'Colombian peso'
    },
    {
      name: 'Comoros',
      capital: 'Moroni',
      languages: ['Arabic', 'French'],
      population: 806153,
      flag: 'https://restcountries.eu/data/com.svg',
      currency: 'Comorian franc'
    },
    {
      name: 'Congo',
      capital: 'Brazzaville',
      languages: ['French', 'Lingala'],
      population: 4741000,
      flag: 'https://restcountries.eu/data/cog.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Congo (Democratic Republic of the)',
      capital: 'Kinshasa',
      languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
      population: 85026000,
      flag: 'https://restcountries.eu/data/cod.svg',
      currency: 'Congolese franc'
    },
    {
      name: 'Cook Islands',
      capital: 'Avarua',
      languages: ['English'],
      population: 18100,
      flag: 'https://restcountries.eu/data/cok.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Costa Rica',
      capital: 'San José',
      languages: ['Spanish'],
      population: 4890379,
      flag: 'https://restcountries.eu/data/cri.svg',
      currency: 'Costa Rican colón'
    },
    {
      name: 'Croatia',
      capital: 'Zagreb',
      languages: ['Croatian'],
      population: 4190669,
      flag: 'https://restcountries.eu/data/hrv.svg',
      currency: 'Croatian kuna'
    },
    {
      name: 'Cuba',
      capital: 'Havana',
      languages: ['Spanish'],
      population: 11239004,
      flag: 'https://restcountries.eu/data/cub.svg',
      currency: 'Cuban convertible peso'
    },
    {
      name: 'Curaçao',
      capital: 'Willemstad',
      languages: ['Dutch', '(Eastern) Punjabi', 'English'],
      population: 154843,
      flag: 'https://restcountries.eu/data/cuw.svg',
      currency: 'Netherlands Antillean guilder'
    },
    {
      name: 'Cyprus',
      capital: 'Nicosia',
      languages: ['Greek (modern)', 'Turkish', 'Armenian'],
      population: 847000,
      flag: 'https://restcountries.eu/data/cyp.svg',
      currency: 'Euro'
    },
    {
      name: 'Czech Republic',
      capital: 'Prague',
      languages: ['Czech', 'Slovak'],
      population: 10558524,
      flag: 'https://restcountries.eu/data/cze.svg',
      currency: 'Czech koruna'
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      languages: ['Danish'],
      population: 5717014,
      flag: 'https://restcountries.eu/data/dnk.svg',
      currency: 'Danish krone'
    },
    {
      name: 'Djibouti',
      capital: 'Djibouti',
      languages: ['French', 'Arabic'],
      population: 900000,
      flag: 'https://restcountries.eu/data/dji.svg',
      currency: 'Djiboutian franc'
    },
    {
      name: 'Dominica',
      capital: 'Roseau',
      languages: ['English'],
      population: 71293,
      flag: 'https://restcountries.eu/data/dma.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Dominican Republic',
      capital: 'Santo Domingo',
      languages: ['Spanish'],
      population: 10075045,
      flag: 'https://restcountries.eu/data/dom.svg',
      currency: 'Dominican peso'
    },
    {
      name: 'Ecuador',
      capital: 'Quito',
      languages: ['Spanish'],
      population: 16545799,
      flag: 'https://restcountries.eu/data/ecu.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Egypt',
      capital: 'Cairo',
      languages: ['Arabic'],
      population: 91290000,
      flag: 'https://restcountries.eu/data/egy.svg',
      currency: 'Egyptian pound'
    },
    {
      name: 'El Salvador',
      capital: 'San Salvador',
      languages: ['Spanish'],
      population: 6520675,
      flag: 'https://restcountries.eu/data/slv.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Equatorial Guinea',
      capital: 'Malabo',
      languages: ['Spanish', 'French'],
      population: 1222442,
      flag: 'https://restcountries.eu/data/gnq.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Eritrea',
      capital: 'Asmara',
      languages: ['Tigrinya', 'Arabic', 'English'],
      population: 5352000,
      flag: 'https://restcountries.eu/data/eri.svg',
      currency: 'Eritrean nakfa'
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      languages: ['Estonian'],
      population: 1315944,
      flag: 'https://restcountries.eu/data/est.svg',
      currency: 'Euro'
    },
    {
      name: 'Ethiopia',
      capital: 'Addis Ababa',
      languages: ['Amharic'],
      population: 92206005,
      flag: 'https://restcountries.eu/data/eth.svg',
      currency: 'Ethiopian birr'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      capital: 'Stanley',
      languages: ['English'],
      population: 2563,
      flag: 'https://restcountries.eu/data/flk.svg',
      currency: 'Falkland Islands pound'
    },
    {
      name: 'Faroe Islands',
      capital: 'Tórshavn',
      languages: ['Faroese'],
      population: 49376,
      flag: 'https://restcountries.eu/data/fro.svg',
      currency: 'Danish krone'
    },
    {
      name: 'Fiji',
      capital: 'Suva',
      languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
      population: 867000,
      flag: 'https://restcountries.eu/data/fji.svg',
      currency: 'Fijian dollar'
    },
    {
      name: 'Finland',
      capital: 'Helsinki',
      languages: ['Finnish', 'Swedish'],
      population: 5491817,
      flag: 'https://restcountries.eu/data/fin.svg',
      currency: 'Euro'
    },
    {
      name: 'France',
      capital: 'Paris',
      languages: ['French'],
      population: 66710000,
      flag: 'https://restcountries.eu/data/fra.svg',
      currency: 'Euro'
    },
    {
      name: 'French Guiana',
      capital: 'Cayenne',
      languages: ['French'],
      population: 254541,
      flag: 'https://restcountries.eu/data/guf.svg',
      currency: 'Euro'
    },
    {
      name: 'French Polynesia',
      capital: 'Papeetē',
      languages: ['French'],
      population: 271800,
      flag: 'https://restcountries.eu/data/pyf.svg',
      currency: 'CFP franc'
    },
    {
      name: 'French Southern Territories',
      capital: 'Port-aux-Français',
      languages: ['French'],
      population: 140,
      flag: 'https://restcountries.eu/data/atf.svg',
      currency: 'Euro'
    },
    {
      name: 'Gabon',
      capital: 'Libreville',
      languages: ['French'],
      population: 1802278,
      flag: 'https://restcountries.eu/data/gab.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Gambia',
      capital: 'Banjul',
      languages: ['English'],
      population: 1882450,
      flag: 'https://restcountries.eu/data/gmb.svg',
      currency: 'Gambian dalasi'
    },
    {
      name: 'Georgia',
      capital: 'Tbilisi',
      languages: ['Georgian'],
      population: 3720400,
      flag: '