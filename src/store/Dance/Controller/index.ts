import ReactPlayer from "react-player";
import { atom } from "recoil";

export const refVideoRefState = atom<ReactPlayer | null | undefined>({
    key: "refVideoRefState",
    default: null,
    dangerouslyAllowMutability: true,
});

export const userVideoRefState = atom<ReactPlayer | null | undefined>({
    key: "userVideoRefState",
    default: null,
    dangerouslyAllowMutability: true,
});

export const controllerProgressBarRefState = atom<HTMLDivElement | null>({
    key: "controllerProgressBarRefState",
    default: null,
    dangerouslyAllowMutability: true,
});

export const isPlayingState = atom<boolean>({
    key: "isPlayingState",
    default: false,
});

export const isUserVideoPlayingState = atom<boolean>({
    key: "isUserVideoPlayingState",
    default: false,
});

export const playedSecondState = atom<number>({
    key: "playedSecondState",
    default: 0,
});

export const playbackRateState = atom<number>({
    key: "playbackRateState",
    default: 1,
});

export const isMirroredState = atom<boolean>({
    key: "isMirroredState",
    default: true,
});

export const isGraphShowingState = atom<boolean>({
    key: "isGraphShowingState",
    default: true,
});

export interface IMarker {
    index: number;
    isLoopMarker: boolean;
    clientX: number;
}

export const markersState = atom<IMarker[]>({
    key: "markersState",
    default: [],
});

export const markerIndexState = atom<number>({
    key: "markerIndexState",
    default: 0,
});

export const isLoopState = atom<boolean>({
    key: "isLoopState",
    default: false,
});

export const loopMarkersState = atom<IMarker[]>({
    key: "loopMarkersState",
    default: [],
});
