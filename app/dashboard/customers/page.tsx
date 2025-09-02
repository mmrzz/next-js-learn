import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { TableRowSkeleton } from "@/app/ui/skeletons";

type Props = {
	searchParams?: Promise<{
		query?: string;
	}>;
};

export default async function Customers(props: Props) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";

	const customers = await fetchFilteredCustomers(query);
	return (
		<div className='w-full'>
			<CustomersTable customers={customers} />
		</div>
	);
}
