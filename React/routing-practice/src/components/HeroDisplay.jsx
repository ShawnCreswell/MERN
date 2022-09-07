import { useParams } from "react-router-dom"


const HeroDisplay = ({heroes}) => {
    const {id} = useParams();
    const hero = heroes.find(h => h.id === id)

    return (
        <fieldset>
            <legend>HeroDisplay</legend>
            <h2>Hero HeroDisplay</h2>
            <h3>You are viewing hero ID: {id}</h3>
            {hero &&
                <div>
                    <h4>{hero.alterEgo}</h4>
                    <p>{hero.realName}</p>
                    <p>{hero.company}</p>
                </div>

            }
        </fieldset>
    )
}

export default HeroDisplay