import * as S from "./struct";

export function load(buffer: Uint8Array): S.PeStruct | null {
    return PeStruct.LoadFrom(buffer);
}

class PeStruct implements S.PeStruct {
    public static LoadFrom(buffer: Uint8Array) {
        const s = new PeStruct(buffer);
        s.load();
        return s;
    }

    public dosHeader(): S.IMAGE_DOS_HEADER {
        return this._dosHeader;
    }

    private constructor(data: Uint8Array) {
        this._data = data;
    }

    private load(): void {

    }

    private _data: Uint8Array;
    private _dosHeader: S.IMAGE_DOS_HEADER;
}