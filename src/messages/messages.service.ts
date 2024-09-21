import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    //Service is creating its own dependency
    //Do not do this in real life
    this.messagesRepo = new MessagesRepository();
  }
  create(content: CreateMessageDto) {
    return this.messagesRepo.create(content.content);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: number) {
    return this.messagesRepo.findOne(id.toString());
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
