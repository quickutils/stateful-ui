
import React from 'react';
import { Helpers } from './Helpers';
import { useSearchParams } from "react-router-dom";

function UrlParamsExamplePage() {
  const textarea = React.useRef<HTMLTextAreaElement>(null);
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  const [page, setPage] = React.useState<number>(parseInt(searchParams.get("page") ?? "0"));

  return (
    <form style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
      <input placeholder="Name" defaultValue={searchParams.get("name") ?? ""} onChange={(e: any) => {
        Helpers.updateSearchParams("name", e.target.value, setSearchParams);
      }}/>
      <span>Page is {page}</span>
      <button type='button' onClick={() => Helpers.updateSearchParams("page", page-1, setSearchParams, () => {
        setPage(page-1);
      })}>Prev Page</button>
      <button type='button' onClick={() => Helpers.updateSearchParams("page", page+1, setSearchParams, () => {
        setPage(page+1);
      })}>Next Page</button>
      <br/>
      <input type='reset' onClick={() => {
        setPage(0);
        Helpers.updateSearchParams("page", null, setSearchParams);
        Helpers.updateSearchParams("name", undefined, setSearchParams);
      }}/>
      <br/><br/>
      <button type='button' onClick={() => {
        if (textarea.current) textarea.current.value = JSON.stringify(Helpers.normalizeUrlParams(searchParams));
      }}>Output JSON value</button>
      <button type='button' onClick={() => {
        if (textarea.current) textarea.current.value = Helpers.urlParamsToSearch(searchParams);
      }}>Output search value</button>
      <br/>
      <textarea ref={textarea} style={{ width: 300, height: 200 }} readOnly/>
    </form>
  );
}

export default UrlParamsExamplePage;
