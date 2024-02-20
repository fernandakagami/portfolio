import { Button, Modal } from 'flowbite-react';
import { Icon } from '@iconify/react';

export default function ModalComponent({ show, triggerModal, triggerFunction }) {
  return (
    <Modal show={show} onClose={() => triggerModal(false)}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <Icon icon="zondicons:exclamation-outline" className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => triggerFunction()}>
              Sim
            </Button>
            <Button color="gray" onClick={() => triggerModal(false)}>
              Não
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};