import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import { z } from "zod"
/* import dayjs from "dayjs" */

export async function appRoutes(app: FastifyInstance){
    app.get('/first', async ()=>{
        const reserve = await prisma.reserve.findMany({
            where: {
                title: {
                    startsWith: 'Sala'
                }
            }
        })
        return reserve
    })

    app.post('/second', async(request)=>{
        const createReserve = z.object({
            id : z.number(),
            title : z.string(),
            author: z.string(),
            status: z.boolean(),
        })

        const {id, title, author, status} = createReserve.parse(request.body)

        await prisma.reserve.create({
            data:{
                id,
                title,
                author,
                status,
            }
        })
    })

    app.put('/update/:id', async (request) => {
        const { id } = request.params;
      
        const updateReserve = z.object({
          title: z.string(),
          author: z.string(),
          status: z.boolean(),
        });
        
        const { title, author, status } = updateReserve.parse(request.body);
        
        await prisma.reserve.update({
          where: { id: parseInt(id) },
          data: {
            title,
            author,
            status,
          },
        });
      
        return { message: 'Reserva atualizada com sucesso.' };
      });
}