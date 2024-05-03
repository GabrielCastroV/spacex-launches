import type { APISpaceXResponseQuery, Doc } from "../types/api";
import type { APISpaceXResponseLaunches } from "../types/apiTypeLauches";

export async function GetLaunchBy({ id }: { id: string }) {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = (await res.json()) as Doc;

    return launch
}

export async function GetOldestLaunches() {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    flight_number: "asc",
                },
                limit: 24,
            },
        }),
    });
    const { docs: launches } = (await res.json()) as APISpaceXResponseQuery;
    return launches
}


export async function GetLatestLaunches() {
    const res = await fetch("https://api.spacexdata.com/v5/launches/")

    const data = await res.json() as Array<APISpaceXResponseLaunches>


    const launches = data

    return launches

}