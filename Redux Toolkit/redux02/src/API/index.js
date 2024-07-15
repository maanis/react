import Chance from "chance";

const chance = Chance()

// let name = chance.name({ middle: true });

export const fakeUser = () => {
    return chance.name({ middle: true })
}