//-----------------------------------------------------------------------------------------------------------------
// Root.
//-----------------------------------------------------------------------------------------------------------------

export interface PeStruct {
    data: DataView;
    // Headers
    dosHeader: IMAGE_DOS_HEADER;
}

//-----------------------------------------------------------------------------------------------------------------
// Headers.
//-----------------------------------------------------------------------------------------------------------------

export interface IMAGE_DOS_HEADER {
	e_magic: number;
	e_cblp: number;
	e_cp: number;
	e_crlc: number;
	e_cparhdr: number;
	e_minalloc: number;
	e_maxalloc: number;
	e_ss: number;
	e_sp: number;
	e_csum: number;
	e_ip: number;
	e_cs: number;
	e_lfarlc: number;
	e_ovno: number;
	e_res: Uint8Array;
	e_oemid: number;
	e_oeminfo: number;
	e_res2: Uint8Array;
	e_lfanew: number;
}