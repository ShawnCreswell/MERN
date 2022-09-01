import React from 'react'
import { muppets } from './muppet';

const MuppetCard = (props) => {
    const { name, job, location} = props;

    return(
        <div>
            <div>
                <div>
                    {
                        muppets.map((muppet, idx) => {
                            return (
                                <MuppetCard
                                key = {idx}
                                name = {muppet.name}
                                locaiton = {muppet.location}
                                age = {muppet.age}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MuppetCard;