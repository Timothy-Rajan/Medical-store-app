import React from "react";
import Navbar from "./Navbar";
import "../Home.css";

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="hero-content">
                    <h1>WELCOME TO MEDICAL STORE</h1>
                    <p>Your one-stop solution for all your medical needs. We provide a wide range of medicines and healthcare products to ensure you stay healthy and happy.</p>
                    <div className="hero-buttons">
                        <a href="/medicines" className="btn-primary">View Medicines</a>
                        <a href="/register" className="btn-secondary">Register Now</a>
                    </div>
                </div>
            </div>  
            <div className="features">
                <h2>WHY CHOOSE US?</h2>
                <div className="feature">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcUFRQXFxcZFxcaGRoXFxkaGRcXGhgZGBgdHRkaICwjGh0qIBcXJDYkKi0vMzMzHSI4PjgyPSwyMzIBCwsLDw4PHhISHj0pIiovOzI6MjIyLy86MjI0ND0yMjI7MjcyMjoyPTIyMjIyNjQyNDI0NDMyMjIyMj0zNDMyMv/AABEIAOMA3gMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBQYDB//EAEwQAAICAQMCBAMDBAsOBwEAAAECAAMRBAUSITEGE0FRIjJhFEJxFlKBkQcjM1NUcpKhsbLTNVVidHWCg5OUwcLR0vAXJEOis+HxFf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACoRAQEAAgEEAQMCBwEAAAAAAAABAhEDBBIhMVEFE0FhoSIyUoGRsfAU/9oADAMBAAIRAxEAPwD7NERASqnMqzSywLREQEREBESrGBaJTH1lgYExEQEREBERASqnMqzSyQLREQEREBESrGBaJTH1kgwLTzZpY9pCrAKsvEQIkSruACSQAOpJ6AAd8mcDuvjex3K6NUFYOPNtDN5hHfy0BHw/4RPX29ZLZJut8fHnyXWM3X0GJ8623xvdWw+1rW9RODZUrI1efvMhJ5L7kYI9jPoSsCMg5B7ERjlMpuHJxZ8d1lNV6Sg9ZeQRKwqTLAQBJgRE5LfdZdZrPsqag6WtNMdRZYoQsf2zgBlwQqgAkmYTUP5b2Lu2pcVlQ4WukOpYgLlWQEZ5A9e47Spt3cTirdBYjipt4vDkqAClPzN8qk+XgMfQE5PpNn4Q3C22u1bmD2Uai2guFC+YExhio6AkHrj2g26KULe0k9pVVkUVZ6REBERARImu3bdqtMgewn4iFRFHKyxz2REHVmP/AO4gbGVHrPm7blc2ou1+msc0qK/hvc1VWPgJZp1WzoHzghwBh8qcgzu9q3FNTUttZODkEMMOjA4ZWX7rAggj6S2aZl2zSZIEkCTI0REQIlHcAEk4A6knsAO8vPm/jHeXvtfSoeNFZC2kd7XwCUz6IuRn3PTsOu+PC8mXbHLl5ceLC5VieKvFH2txp6yV0xJBft9pYfdB9K/6/wCHfWASbaFdeDD4fb2x2x7ETErtKN5dh/iOezj2Ps4/nmeu6PPCTLHzHs+h/VuHK3iznbbfF+XvcRxbl8uDn8MdZ9Q8JBxotKHzy8irOe/yDGfrjE4jwx4dOrIttBGlByqnodQQe59qs/yvw7/T5w4cLjj5/L0/UOox5c5MfU/PytEROz55ERA4ncNGLd0tr5FeW3KAwwSpGoyrYPQ4IBwekh9oSnSXuLVtL+WpZR0PG0EliWYs5LHJJ6dAAMdY3TStbud1aMFZ9tABYZXPn9mA6lT2I9iZU7LZRptQ9hXlZ5OQrFgWVxlvlUL3ChQOgUdTnpL/ADTwk9Vna/w4j6rm14HNg4qYAsCAA5T4hgsFA5FSVGQCM9LeB++v/wAoaj/gnhuPhu6zVG3khrNiWKeTK6MoUEkAHzCAvwDIA5EkEgZ9/BB667/KGo/4JMfz40X3HVRETSkREBETR+It6+zKqovO1w/lqTxQBQC72P2Stcgk9+oA7wL77vaaZRkF7XyK6lI5WEd+p6Ko7s56KJxu2DUXakajnXbfxZkwx8lah0ZEJHykkIzY5o4RsMj4mpUW6qx8Ozl8C64rg2AdRWiEjhUMEhMjsXcjrx3ewbW1wavTuyaViBbcrNm4qOJSg9MJ35W4HI9FAAGMY57viePl35eCceG87/FfU/T9Wy1daa/W1hUF2moFqXF+tBtZcAIPv2L1BbqFBPYzotn2irSoa6VIUsXPJmYljgElmJPYAfomTo9IlSLXWgRFACqowABMidLXnkTERIpERAifI9yoNer1Fb9GNr2rn71drc1Ye4BJX8Vn1uaretho1QAtU8lzwdSVdM98MPT6HIPtOvDyfby7nn6ng+9h27fNCfWbPw14eOsYW2rjSqcqpHXUMOx+lY/934d9/p/AOlU5ssvuUdeFrrw6e4rVeX4HI+k6xEAAAAAAwAOgAHYATvz9V3zWPh5Ol+nziy7s/NSiAAAAAAYAHYCXiJ430yIiAiIgcPuiWNudy1fuh20cfi4knz+oDfcJGQG9Cczyo0OpTTag2BwHNJVGOQrhxz4KCxC44DJOWIY4Hr0O8+Hk1Dpb5l1NqKVFlFnB+BOSpyCGXPXqJhfki398tw/16f2calsrPmeGLumg1javkvMIHRkdHGOOFBVwT8KDDEqAS5I6gZEyfA/fX/5Q1H/BJ/JFv75bj/r0/s5uNn2qvTV+XWGxyZmZmLM7scszMe7ExJJs82tjERDRERAicd4hpfVuPsyLYKltrtLPwrcWcOdVb4P7YrVo3LHFSuDk5A6Dc9JZbxQWGus58zhkWOOmFVh8gPXLD4sdsE5GXp9OlaqiKFRQAqqAFUDsAB2EeCWy7jits8OW2AV3VmjToMNXzRrdQe5DvV0Ws4BIHxMe+AAB21VaqoVQAAAAAMAAdAAB2E9JMTxNRcsrld27qYiIQiIgIiVJgWiUA+ssDAmIiAiIgIiICVU5lWaWWBaIiAiIgIiVYwLRKY+ssDAmIiAiIgIiICVBzIZvSEgXlB6y8giBUmWAgCY2u11dKGy11RAQCzHAyTgQMmJo/wArdB/C6v5Xt3kflboP4XV/Ll1U7p8t9E1+27vp9Ry8m5LOHHlwOePLPHP44P6psJFJ5s0se0hVgQqz0iICJh6/W10obLXVEXuzHA69APqSemPWYO2+JNJe/l12/HgkI6WVswHcqtiqWH1GY0m26iandd8o07KljMXYErXWj2WMB3PCsE4+p6T12vdqdQrGp8lTh1ZWR0b2ZHAZT+I6xo22MoO5l5BEKqTLASAJaAiIgRE5Tdt6D6hNPVrKqF8t7HsBqdiysqiteeVU/EWOQTgdPUzJ8L76t9fF7amtWy2vKMo80VuyrYqZJAYAH2746S6Tfl0coze0sZRVkUVf1T0iICIiBE5L9kcZ0YUEc2voWtfV3Nq4VceuMn8AZ1k4fetcV3JSabbxTp1atENYCPa9ivYfMZcnigUd8dZO6Y+bdaSzc18tL/4ZX9D9oq7ufkb7wA/3SB+xhfjH2ir5CvyP+dyz3nV/lbZ/ANT/ACqP7WB4tf8AgGp/lUf2sf8Apx/qn+Yz9ifF/dqv2PdtbTanW0WMpdRphgZHJQjkOAe6nnj6EEe076fP9bups1ejuGluos80Us7moq9VgPKtgrknqAw6dCD7zv5e+Z+ZdrMe3wtERDRPDVahK63sc8VRWdj7KoJY/qBnvMLddEL6baWOBbW6EjuA6lc/ozA5KgWat01V68VHxaek9RWCOllg7G0j9Cg4HXJnh4iw/ChFL6ljyp4txaplP7qXHyIvqfXtg5lE3O9MaM0ltaAFCdfKdcYF/PHSrpk+oPw4zN1t2nXSkopXUax/Le9i6o4qZ+BcBu1SfFhB7e5mmGx2PZxQGZ3Nt9mDbaw+JyOwA+4g7BR0H4zz3raHZ11OmYJqUGAT8lydzVbjup9G7qeo9QabRugC1o9osRwi0ahnQtqnZXZhwRQFKhf0zJ3zdxp1VVU23WErTUvzWN9T9xB3Zz0A/QDPO18aeuy7kuopW0KUJ5KyN8yWIxSxTjuQykZ9ZspqfDu3NRQFchrGayywj5TZa7WPxz90FsD6CbaSrCIiFUc4BPsJ8s23ct53Ci2ypqVrIdOJAUnK5KocE9AwGSR19e8+pW/KfwP9E4r9iQ/+Q/0r/wBVJZ6Zvm6W0iBa0X7JauEUcfIPTAAx0GJ47rp7LK+NOmcW86zWz1cVR1sVg5YjoBjM3/i/XmnS2OjcX+FVI7gswBI+uMz28L603aWqwnLFcMTjJZSVYnHrkGZ75vt/u63hy+33/jev2clTvO50a3T6fVtUyXEgcFGCOxwwAIYEr3GOv6vok4Xxj/dPa/49v9NU7qarlimIiRoiIgROL3D+6Vv+K6f/AOS+dpOM122vduV3l3morptNn9rV+WbNRj5u2OP8848/HeTjuM/LWGUxylrA8RPqBWfIWthxfzPMz0Tj93qOveanwI2o8pAVrGn42cGGfM5+Z69cYzz9PadafDGoPQ64kf4vX/zla/C16gKut4qOwXTVAfXoDPFj0vJOK4anv27Xlxucy8sHcv3TR/45V/VsndThty2a6p9I9mqNo+10jj5SJ1PLrlTn36fWd1PV03FlxYduTlyZzLLcTERPSwTVeIdxOn072qoZhxVFJwGsdlrQE+g5MufpNrMHdtAmopspfIV1xlThlPdWU+jAgEfUQlYmx7OKAzu3m32YN1pGCx9FUfdReyqO345mZrdGLAPidSrowKMULcG5BWI6lCehHqJqtn3SxbPsmrwLwCa7AMJqax99fzXH3k9O4yDMvet3WhQqg23WHjVUp+J2+v5qDuzHoB+gS+dnjTW6rXnSqHsHPVXBFTT12Fq/MQEftYYDgmDlnI/nwDpzstlhN9lp+2EhltTPGojPGtFP/pDJBU/Nkk9Y2Ni9lr3k/bQeNqsMGtM5Raxk/tWOoYfN3PWZF1tmpsOm0zYx0uuHVaVP3V9GtI7D7vc+krLpPDm4nU6Wq5lCs6/EB2DqSrY+mVOPpNpMbQaJKa0qrGERQqj6AY6n1P1mTMtpiIgedvyn8D/RPlngHddTTolSnSNcpZ2LhiOLdBxwFOegB7+s+p2/KfwP9E4n9iU/+Q/0r/1Uiy2eKuOUxyls3+jktTXqGu8i3KvfZU7g+7EhTjPTAc9PTAHpNx4b8R3UoNNXpjc6s5IDEYGRnACn1LdfqJ1ev8PeZrKdVyACLhlx1YjkVIOenVv5pfZfDq6e++/lyNrEqMY4KzF2Gc9epH8kTzTiymX/AHp9TPq+LLj1ZvxLr159f6cjuWvuu3DbmuoNDCy0AEk8h+1HPUD16T6dOF8Yf3S2v+Pb/TVO6nq1qR8q2W2yaTERIEREBNNrNiqttN3O5LCioxqusr5KhZlBCEA4Lt+ubVmkpA0/5OJ+/wCr/wBru/6o/Jyv9/1f+13/APVN1EbqaaRfDdXJHazUOUcOos1FrqHXODxZsHuZu4iFTESrGBaJQD6/rlgYGDuW2U6hOF1YdQQRnIKsOxVhgq31BBnhtmxafTsXrrPNhgu7PZYR+bzsJYL9M4m2iNpprNz2PTagg3Uo5HQMRhgPYMMHH0zMnRaKulBXVWtaDsqKFH6h6/WZMQqYiICVU5lWeWSBDrkEe4nzLYtl3nRK1NIodOWfjbIzgLleoIyAOh/5z6hIll0lm3Cedv8A+96T/v8Az487f/3vSf8Af+fO7iE1+r53p9k3O/W6fUavylSkk4RugHc8VGSSTxzk+n6J9EiQTFu1k0tEoPxkgyKtPNn9pY9pVVgFWekRAREQEREBKD1l5BECpMsBICy0BERAREQE82b2lj2lVWAVf1T0iICIiAiIgJQdzLyCIEEyQIAkwEREBERAiavdN9o05VLHPNhla60eyxh7hKwWx9cYnlvu8eTxrqTzNRbkVVZxnHd3P3a17lv0DqZodbemgrsaxrLNZeFYWKgLX2g4FaDqFRTxHD81umSZZEtdJte90agstbnmnVkdHrsUHsSlgDAfXGJs5weqtv8AKov1KBNZXqaQvBCA1d9oQ1BskOCjNkZ6FQT6E95FhKmIiRSIiBr9x3OqgKbWK8iQMKzEkAseiAnAAJJ7DEirdaWs8lbAbMZwAcEYU9GxxJwynAOcETl69oXctQ2quLHTVO1enrBK8yjAWW8lweJdSAB34jrjpPff/CXxjV6RjXqa/iVck12YXBTiThOQ+HI6dTkHvLryzuuyiYO069NRTXemeNiBsHup9VP1ByD9RM6RoiIgIiICIiBExdbrq6UNlti1oO7OwUZPYZPr9Jq9w8V6OlnR705oPiRfibl+aAO7f4PecBuWus1VnnXDAXPlV91qU+p/OsPqfTsJ24uHLkuo83UdThw47vv4fTNs3nT6jPkXJZx+YK3Vc9sjuBNjPke1ll1mlZP3Q2hendqip8wH3UKM/iBPrknLx/by0vTc/wB7Du1pMRE5PQREQImo3zdxp1VVU23WErTUp+KxvXJ+6i92Y9AP0CbecXdu9FOr1uotbPlVaepMdT8QssatfTmWwSPQBScAZlS/CdTau31tqdUfOuuDCyxWAIIXKVVqeq0j4hkdQcMQckjA2zZ2BfWbnn9yzW5s6aRFb4Vz0YW4KkOMkkNnDfN6bVtTiwbjq1rrXLuKnJVdNWw5eYAegckZKkDJYt0YcZsNq0H2tq7XQ16Ss8tLQ2RzOcrbYp7AZ+CvsowcdgEpZPT32rSW6qxNXqFZK066alujDIx51oH/AKjAnC/cB9ycdPESEiYiIUmPreXlvw+bg3H+NxOP58TIiBofBRT/APn6ThjH2ert+cEAf9PLOfrN7OO3jadXpy1u32oiMWssptANfLuzJ0yuepKggZ69Jrdi1O47kgsa1KNK/JW8kYtcA4YKW5FMkEcsjA7D1l1vyzvXh0Hg9x5NzDAr+16o1n04ea2SD7cucxt78baaghayL3PcVsvBR17v1Geh6DJ98dI3TQo1uk29V46cI9tla9A1dPBa0Pupd1J9+PXvPm+5bY9epdGr8uwvZxDDghUucMhxhl6gALk+gGekxnl2zcdunwxzy1ldSe31vYN/q1lZevKsuOaMMFc5A69mUlWAYex9QRNzOZ8F7MdPUSwIZgoAPQhFLMCw9GLWWNj0DAek6aXG2zyxlrd16TERKiJg7puVenrNtrYUYHTqzMflVR3ZiegAk7nuFenqa2w4VfYZJJOFVQO7EkAD6z57dZfrLy9mU4dAAemmUj5VPZtSwI5P2QHA6znycmPHjurjjcrqNElhFjK6ceVtjKfmAsdmsNbvjBtUMM4/DuMT3dzlURDZY541ovzO3+4epJ6AdTOg3eulKV03l8+fwVUp87P3BU/dwfiLnt1Jlti8I6tL6XvaoLU3MsjMz2NxKgYKjj83U9c4+s9PRdfc+K7mrPV+Xzeq+nT70su5fc+G+8KeGxpgbbCH1DjDsPlrXv5deeyj1Pdj1PoB0sROdtt3XvxxmM1PSYiJGiIlWMDkPGfijyMaeosLGCmx1Xn9nqZsF+P33xyKr9CT6A8ps+3vfai1cQU+JG5LcmmrY58536rdqrMclB7fMwAVVHXb/wCEvtFxuS7ymZVV8pyzxyFZfiHFhnHXIPSbvY9qq0tQqqXCjqSfmZj3Zj6sf/r0iVb26mvf5YH5ONYynVamzUKhDLWy1pWWByrOtajzCDg4Jxn0nQxEImIiAiIgJVTmQzQkA65BHuCJyvgrW016Oul3rqsoBrtRmVSjqSGJBx0b5uXrnM62a7V7PprWD26eqxh2aytGYfpYZlStRstw1Osu1SHlSla6epx8rsHNlrKfVc+WuR0JUzpuI9u3aVSsKAFAAAwABgAewA7T0kpCIlSYVaJQfjLAwOO8Z6pWs01I6slo1FmeiJSi2JyZj2PJvhHup7YmtbxBQwAocX2t0rqqPJ2Y+4+4vuzYAE6zddg02pZXur5sowPiYBlzniwUgOuevFsibKulV6hVBPcgAZ/VPNzdNjy5TLK+vw6YclxlkaTw7sRpJvuIs1LjDMPlqTuK689kHqe7HqfQDoIkzvJJNRzIiJoRIVsyjNLqIFpQesvIIgQTJAgCTAREQEREBKFvaWIlFWAVf1T0iICIiAiIgJT3l5BECCZIEgCWgIiICIiBE82OZcjMKIEKsvEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="></img>
                    <div className="feature-description" >
                        <h4>Wide Range of Products</h4>
                        <p>We offer a vast selection of medicines and healthcare products to meet all your needs.</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="data:image/png;base64,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" alt="Feature 2" />
                    <div className="feature-description">
                        <h4>Quality Assurance</h4>
                        <p>All our products are sourced from trusted manufacturers and undergo rigorous quality checks.</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="https://thumbs.dreamstime.com/b/customer-service-icon-vector-illustration-client-symbol-customer-service-icon-vector-illustration-client-symbol-web-sites-170904571.jpg" alt="Feature 3" />
                    <div className="feature-description">
                        <h4>Excellent Customer Service</h4>
                        <p>Our dedicated customer service team is here to help you with all your queries and concerns.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
