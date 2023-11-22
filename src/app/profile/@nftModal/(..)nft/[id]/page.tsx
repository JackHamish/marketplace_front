import NftPage from "@/app/nft/[id]/page";
import Modal from "@/components/modal";

type Props = {
  params: { id: string };
};

const NftModal = ({ params: { id } }: Props) => {
  return (
    <Modal>
      <div className="flex flex-col items-center justify-center">
        <NftPage params={{ id }} />
      </div>
    </Modal>
  );
};

export default NftModal;
