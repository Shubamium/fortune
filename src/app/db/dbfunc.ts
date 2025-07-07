"use server";

import { editData, fetchData } from "./db";

export async function getCount() {
  let count = await fetchData<any>(`
			*[_type == 'general' && preset == 'main'][0]{
				mc
			}
	`);

  return count.mc || 0;
}

export async function syncCount(newCount: number) {
  const gd = await fetchData<any>(`
			*[_type == 'general' && preset == 'main'][0]{
				_id,
				mc,
			}`);
  console.log(gd);
  const res = await editData(gd._id, { mc: newCount });
  if (res) {
    console.log("Sync Succesfully");
  }
}
