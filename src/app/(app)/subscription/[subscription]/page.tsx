const Subscription = async ({params}:{params: { subscription: string }}) => {
    const subscription = params.subscription;
    return (
        <>Your subscription is {subscription}</>
    );
};

export default Subscription;