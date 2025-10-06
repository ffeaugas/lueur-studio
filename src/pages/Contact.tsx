import Footer from '@/components/Footer';
import Inner from '@/Inner';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Inner>
      <div className="h-screen relative bg-background">
        <div className="fixed inset-0 w-full h-full z-0 bg-dark">
          <img
            src="/contact.png"
            alt="Contact"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="absolute w-full h-full flex flex-col gap-20 items-center font-sprat-light text-creme z-1 my-[200px]">
          <div className="flex flex-col gap-8 bg-dark rounded-2xl p-20">
            <h1 className="text-[80px] text-center p-4 tracking-[-10px]">
              ET SI NOUS ÉCRIVIONS ENSEMBLE
              <br />
              UNE BELLE HISTOIRE ?
            </h1>
            <form className="flex flex-col gap-8 font-helvetica-regular">
              <div className="flex flex-row gap-8">
                <Field>
                  <FieldLabel>Prénom</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>Nom</FieldLabel>
                  <Input />
                </Field>
              </div>
              <div className="flex flex-row gap-8">
                <Field>
                  <FieldLabel>Adresse mail</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>Téléphone</FieldLabel>
                  <Input />
                </Field>
              </div>
              <Field>
                <FieldLabel>Motif</FieldLabel>
                <Select defaultValue="">
                  <SelectTrigger id="checkout-exp-month-ts6">
                    <SelectValue placeholder="Sélectionnez l'object" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">Partenariats</SelectItem>
                    <SelectItem value="02">
                      Demande d’informations générales
                    </SelectItem>
                    <SelectItem value="03">
                      Privatisation / évènements privés
                    </SelectItem>
                    <SelectItem value="04">Nous rejoindre</SelectItem>
                    <SelectItem value="05">
                      Contact presse et communication
                    </SelectItem>
                    <SelectItem value="06">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Écrivez-nous</FieldLabel>
                <Textarea />
              </Field>
              <div>
                <Button variant="rounded">NOUS CONTACTER</Button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </Inner>
  );
};

export default Contact;
