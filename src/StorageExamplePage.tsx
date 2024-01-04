
import React from 'react';

function StorageExamplePage() {
  const storage = window.localStorage ?? window.sessionStorage;
  const [page, setPage] = React.useState<number>(parseInt(storage.getItem("page") ?? "0"));

  return (
    <form style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
      <input placeholder="Name" defaultValue={storage.getItem("name") ?? ""} onChange={(e: any) => {
        storage.setItem("name", e.target.value);
      }}/>
      <span>Page is {page}</span>
      <button type='button' onClick={() => {
        storage.setItem("page", ""+(page-1));
        setPage(page-1);
      }}>Prev Page</button>
      <button type='button' onClick={() => {
        storage.setItem("page", ""+(page+1));
        setPage(page+1);
      }}>Next Page</button>
      <br/>
      <input type='reset' onClick={() => {
        setPage(0);
        storage.clear();
      }}/>
    </form>
  );
}

export default StorageExamplePage;
