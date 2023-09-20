const TermsPopUp = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: Function;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="fixed inset-0 w-full h-full flex justify-center items-center bg-transparent z-30 font-inter">
      <div className="bg-off-white w-4/5 h-4/5 overflow-scroll p-4 rounded-3xl">
        <div
          className={`${className} flex flex-col gap-6`}
          onClick={handleClick}
        >
          <div>
            <p className="text-center underline font-bold">Regler och Vilkor</p>
          </div>
          <div className="h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            laudantium cumque voluptatem unde ea veritatis atque dolor facere
            quas quis nobis ipsam a distinctio ab quia saepe itaque iure, vitae
            ad ut sunt? Deserunt saepe, sapiente dolores ipsa doloribus nobis
            nesciunt dolorum reprehenderit maxime accusamus voluptas nisi. Qui
            delectus blanditiis error aspernatur aut quibusdam explicabo ad iste
            sint ducimus quisquam, neque quaerat dolor reiciendis totam rem
            fugiat doloremque placeat quo, quod eum assumenda quae! Corporis,
            illum ratione. Id dolorem vero, qui repellendus numquam, quo labore
            beatae, facilis laudantium alias at quia ullam commodi voluptas
            dolore nulla! Dignissimos minus neque accusamus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptas iste quisquam dicta
            quam sunt laborum vel. Blanditiis ducimus rerum possimus temporibus
            quas corrupti accusantium. Reiciendis, provident! Aliquid illo ab
            repellendus, ipsam unde odio laboriosam voluptatibus illum possimus
            sint perspiciatis dolor est, tempora sunt consequuntur repellat
            delectus, eveniet fugit doloribus? Asperiores dolore fugit nostrum
            quaerat laudantium porro fugiat, optio, neque possimus, laborum
            dolorum nam cum velit! In, blanditiis perspiciatis quas, omnis
            delectus temporibus nostrum labore dolorem rem debitis, recusandae
            aut culpa nesciunt optio itaque fuga vitae harum saepe. Natus sequi
            dolore hic aut optio obcaecati voluptate dicta consequatur repellat
            in. Id.
          </div>
          <div>
            <p className="text-center">Stäng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPopUp;
