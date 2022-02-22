import * as React from 'react';
import { Button, FormControl, Input, Modal } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string }) => void;
};

export const NewExampleModalComponent: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>New Example</Modal.Header>
        <Modal.Body>
          <FormControl isInvalid={'name' in errors}>
            <FormControl.Label>Name</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input onBlur={onBlur} onChangeText={onChange} value={value} />
              )}
              rules={{ required: 'Field is required', minLength: 3 }}
              name="name"
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.name?.message}
            </FormControl.ErrorMessage>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Cancel
            </Button>
            <Button onPress={handleSubmit(onSubmit)}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
