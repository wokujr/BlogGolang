import {FC, useEffect, useState} from "react";
import WaterWave from "react-water-wave"

interface WaterWaveEffectProps {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: () => {}
}

const WaterWaveEffectWrapper: FC<WaterWaveEffectProps> = ({
                                                              imageUrl,
                                                              dropRadius,
                                                              perturbance,
                                                              resolution,
                                                              children
                                                          }) => {
    return (
        <>
            <WaterWave
                imageUrl={imageUrl}
                dropRadius={dropRadius}
                pertubance={perturbance}
                resolution={resolution}
            >
                {children}
            </WaterWave>
        </>
    )
}

export default WaterWaveEffectWrapper;