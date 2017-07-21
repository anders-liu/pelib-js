import * as S from "./struct";

export function load(buffer: ArrayBuffer): S.PeStruct | null {
    return PeStruct.LoadFrom(buffer);
}

class PeStruct implements S.PeStruct {
    public static LoadFrom(buffer: ArrayBuffer) {
        const s = new PeStruct(buffer.slice(0));
        s.load();
        return s;
    }

    public dosHeader(): S.IMAGE_DOS_HEADER {
        return this._dosHeader;
    }

    private constructor(buffer: ArrayBuffer) {
        this._data = new DataView(buffer);
    }

    private load(): void {
        this._dosHeader = {
            e_magic: 1,
            e_cblp: 2,
            e_cp: 3,
            e_crlc: 4,
            e_cparhdr: 5,
            e_minalloc: 6,
            e_maxalloc: 7,
            e_ss: 8,
            e_sp: 9,
            e_csum: 10,
            e_ip: 11,
            e_cs: 12,
            e_lfarlc: 13,
            e_ovno: 14,
            e_res: Uint8Array.from([15]),
            e_oemid: 16,
            e_oeminfo: 17,
            e_res2: Uint8Array.from([18]),
            e_lfanew: 19,
        }
    }

    private _data: DataView;
    private _dosHeader: S.IMAGE_DOS_HEADER;
}