import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/supabase";

const AllServicesTest = async () => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const session = (await supabase.auth.getSession()).data.session;

        let { data: services, error } = await supabase.schema("public").from("services").select("*");

        console.log(services);
        console.log(error);
    
        return (
            <ul>
                {services&&services.map((service)=>(<li key={service.id}>
                    {service.name}
                </li>))}
    
            </ul>
        )
        

};

export default AllServicesTest;