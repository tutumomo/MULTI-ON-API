/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../..";
import * as MultionApi from "../../../api";
import * as core from "../../../core";
export declare const BrowseInput: core.serialization.Schema<serializers.BrowseInput.Raw, MultionApi.BrowseInput>;
export declare namespace BrowseInput {
    interface Raw {
        cmd?: string | null;
        url: string;
        session_id?: string | null;
        maxSteps?: number | null;
        stream?: boolean | null;
        includeScreenshot?: boolean | null;
    }
}
