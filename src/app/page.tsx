import Index from "@/app/pages";


export type UserType = {
    id: number;
};

export type UserTProps = {
    users: UserType[];
};

export default function Home() {
    return (
       <Index />
    );
}

